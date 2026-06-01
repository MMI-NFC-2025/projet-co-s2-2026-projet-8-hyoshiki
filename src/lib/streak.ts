import { pb } from "./pocketbase.js";

export async function actualiserStreak() {
    // 1. Charger le cookie actuel
    pb.authStore.loadFromCookie(document.cookie);

    if (!pb.authStore.isValid || !pb.authStore.model) return;

    const user = pb.authStore.model;
    const now = new Date();

    try {
        // On récupère l'utilisateur frais depuis la base de données
        const freshUser = await pb.collection("users").getOne(user.id);

        const lastConnStr = freshUser.derniere_connexion;
        let currentStreak = Number(freshUser.serie_en_cours || 0);
        let shouldUpdate = false;

        if (!lastConnStr) {
            // Première connexion à vie
            currentStreak = 1;
            shouldUpdate = true;
        } else {
            const lastConn = new Date(lastConnStr);

            // On remet les heures à zéro pour comparer uniquement les jours du calendrier
            const todayDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const lastConnDate = new Date(lastConn.getFullYear(), lastConn.getMonth(), lastConn.getDate());

            const diffTime = todayDate.getTime() - lastConnDate.getTime();
            const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

            if (diffDays === 1) {
                // Il s'est connecté hier -> on incrémente la série
                currentStreak += 1;
                shouldUpdate = true;
            } else if (diffDays > 1) {
                // Il n'est pas venu depuis plus d'un jour -> on réinitialise à 1
                currentStreak = 1;
                shouldUpdate = true;
            } else if (diffDays === 0) {
                // Il s'est déjà connecté aujourd'hui -> on ne fait rien
                shouldUpdate = false;
            }
        }

        // Si on doit mettre à jour la date et la série
        if (shouldUpdate) {
            const updatedUser = await pb.collection("users").update(user.id, {
                derniere_connexion: now.toISOString(),
                serie_en_cours: currentStreak
            });

            // Mise à jour du cache local
            await pb.collection("users").authRefresh();
            document.cookie = pb.authStore.exportToCookie({ secure: true });

            console.log(`Série mise à jour : ${currentStreak} 🔥`);
        }
    } catch (error) {
        console.error("Erreur lors de la vérification de la série :", error);
    }
}