import {
    signesSorted,
    signeByID,
    searchSigne,
    leconsAll,
    leconsByDifficulte,
    leconByID,
    getUserProfile,
    updateUserProfile,
    updateUserPseudo,
    updateUserAvatar,
    deleteUserAvatar,
    aventuresAll,
    quizzAll,
    getSuiviLecons,
    getSuiviQuiz,
    getAbonnements,
    createSouscription,
    getUserSouscription
} from './backend.mjs';

// ==================== TESTS SIGNES ====================

// Récupérer tous les signes triés par nom
try {
    console.log("\n=== SIGNES TRIÉS ===");
    const records = await signesSorted();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

/*
// Récupérer un signe par ID
try {
    console.log("\n=== SIGNE PAR ID ===");
    const records = await signeByID('signe_id_ici');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// Rechercher des signes par nom
try {
    console.log("\n=== RECHERCHE SIGNE ===");
    const records = await searchSigne('main');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// ==================== TESTS LEÇONS ====================

// Récupérer toutes les leçons
try {
    console.log("\n=== TOUTES LES LEÇONS ===");
    const records = await leconsAll();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// Récupérer les leçons par difficulté
try {
    console.log("\n=== LEÇONS PAR DIFFICULTÉ ===");
    const records = await leconsByDifficulte('Débutant');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// ==================== TESTS PROFIL ====================

// Récupérer le profil utilisateur
try {
    console.log("\n=== PROFIL UTILISATEUR ===");
    const profile = await getUserProfile('user_id_ici');
    console.log(JSON.stringify(profile, null, 2));
} catch (e) {
    console.error(e);
}

// Modifier le pseudo
try {
    console.log("\n=== MODIFICATION PSEUDO ===");
    const updated = await updateUserPseudo('user_id_ici', 'NouveauPseudo');
    console.log("Pseudo modifié:", updated.pseudo);
} catch (e) {
    console.error(e);
}

// Modifier le profil complet
try {
    console.log("\n=== MODIFICATION PROFIL ===");
    const userData = {
        pseudo: "MonNouveauPseudo",
        email: "newemail@example.com"
    };
    const updated = await updateUserProfile('user_id_ici', userData);
    console.log("Profil modifié:", JSON.stringify(updated, null, 2));
} catch (e) {
    console.error(e);
}
*/

// Modifier l'avatar (depuis le navigateur avec un input file)
/*
try {
    console.log("\n=== MODIFICATION AVATAR ===");
    const fileInput = document.getElementById('avatarInput'); // input type="file"
    const avatarFile = fileInput.files[0];
    const updated = await updateUserAvatar('user_id_ici', avatarFile);
    console.log("Avatar modifié avec succès");
} catch (e) {
    console.error(e);
}

// Supprimer l'avatar
try {
    console.log("\n=== SUPPRESSION AVATAR ===");
    const updated = await deleteUserAvatar('user_id_ici');
    console.log("Avatar supprimé");
} catch (e) {
    console.error(e);
}
*/

// ==================== TESTS AVENTURES ====================

// Récupérer toutes les aventures
try {
    console.log("\n=== TOUTES LES AVENTURES ===");
    const records = await aventuresAll();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// ==================== TESTS QUIZ ====================

// Récupérer tous les quiz
try {
    console.log("\n=== TOUS LES QUIZ ===");
    const records = await quizzAll();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// ==================== TESTS SUIVI ====================

// Récupérer le suivi des leçons de l'utilisateur
try {
    console.log("\n=== SUIVI LEÇONS ===");
    const records = await getSuiviLecons('user_id_ici');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// Récupérer le suivi des quiz de l'utilisateur
try {
    console.log("\n=== SUIVI QUIZ ===");
    const records = await getSuiviQuiz('user_id_ici');
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// ==================== TESTS ABONNEMENTS ====================

// Récupérer tous les abonnements
try {
    console.log("\n=== ABONNEMENTS ===");
    const records = await getAbonnements();
    console.log(JSON.stringify(records, null, 2));
} catch (e) {
    console.error(e);
}

// Récupérer la souscription de l'utilisateur
try {
    console.log("\n=== SOUSCRIPTION UTILISATEUR ===");
    const record = await getUserSouscription('user_id_ici');
    console.log(JSON.stringify(record, null, 2));
} catch (e) {
    console.error(e);
}

// Créer une souscription
try {
    console.log("\n=== CRÉATION SOUSCRIPTION ===");
    const souscriptionData = {
        utilisateur: 'user_id_ici',
        abonnement: 'abonnement_id_ici',
        date_debut: new Date().toISOString(),
        date_fin: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    };
    const result = await createSouscription(souscriptionData);
    console.log("Souscription créée:", result.id);
} catch (e) {
    console.error(e);
}

