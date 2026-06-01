import { pb } from "../lib/pocketbase.js";

/**
 * Ajoute une quantité d'XP aléatoire (entre 25 et 100) à l'utilisateur connecté.
 * Les paramètres score et maxScore sont conservés pour la compatibilité avec les jeux existants.
 */
export async function attribuerXP(score: number, maxScore: number): Promise<number> {
    // 1. Charger les infos de connexion
    pb.authStore.loadFromCookie(document.cookie);

    // 2. Vérifier si un utilisateur est bien connecté
    if (!pb.authStore.isValid || !pb.authStore.model) {
        console.warn("Utilisateur non connecté : l'XP ne sera pas sauvegardée.");
        return 0;
    }

    const user = pb.authStore.model;

    // 3. Calcul de l'XP : Génère un nombre entier aléatoire entre 25 et 100
    const xpGagnee = Math.floor(Math.random() * (100 - 25 + 1)) + 25;

    try {
        // 4. On va chercher le vrai score en base de données (pour contourner le bug des 100 points)
        const freshUser = await pb.collection("users").getOne(user.id);

        // 5. Additionner
        const pointsActuels = Number(freshUser.points_totaux || 0);
        const nouveauTotal = pointsActuels + xpGagnee;

        // 6. Sauvegarder dans PocketBase
        await pb.collection("users").update(user.id, {
            points_totaux: nouveauTotal
        });

        // 7. Mettre à jour le cache du navigateur
        await pb.collection("users").authRefresh();
        document.cookie = pb.authStore.exportToCookie({ secure: true });

        console.log(`Succès : +${xpGagnee} XP aléatoires attribués ! Nouveau total : ${nouveauTotal}`);
        return xpGagnee;

    } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'XP dans PocketBase :", error);
        return 0;
    }
}