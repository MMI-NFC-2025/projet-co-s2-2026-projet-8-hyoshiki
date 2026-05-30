import PocketBase from 'pocketbase';

const pb = new PocketBase('https://odysigne.carnicer.fr/');

// ==================== SIGNES ====================

export async function signesSorted() {
    const records = await pb.collection('signes').getFullList({ sort: 'nom_signe' });
    return records;
}

export async function signeByID(id) {
    const record = await pb.collection('signes').getOne(id);
    return record;
}

export async function searchSigne(nom) {
    const records = await pb.collection('signes').getFullList({ filter: `nom_signe ~ "${nom}"` });
    return records;
}

export async function addSigne(signeData) {
    try {
        const record = await pb.collection('signes').create(signeData);
        console.log('Signe ajouté :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout du signe : ", error);
        throw error;
    }
}

export async function updateSigne(id, signeData) {
    try {
        const record = await pb.collection('signes').update(id, signeData);
        console.log('Signe modifié :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification du signe : ", error);
        throw error;
    }
}

export async function deleteSigne(id) {
    try {
        await pb.collection('signes').delete(id);
        console.log('Signe supprimé avec succès');
        return true;
    } catch (error) {
        console.error("Erreur lors de la suppression du signe : ", error);
        throw error;
    }
}

// ==================== LEÇONS ====================

export async function leconsAll() {
    const records = await pb.collection('lecons').getFullList({ sort: '+created' });
    return records;
}

export async function leconsByDifficulte(difficulte) {
    const records = await pb.collection('lecons').getFullList({ filter: `difficulte = "${difficulte}"` });
    return records;
}

export async function leconByID(id) {
    const record = await pb.collection('lecons').getOne(id);
    return record;
}

export async function addLecon(leconData) {
    try {
        const record = await pb.collection('lecons').create(leconData);
        console.log('Leçon ajoutée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout de la leçon : ", error);
        throw error;
    }
}

export async function updateLecon(id, leconData) {
    try {
        const record = await pb.collection('lecons').update(id, leconData);
        console.log('Leçon modifiée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification de la leçon : ", error);
        throw error;
    }
}

// ==================== PROFIL UTILISATEUR ====================

export async function getUserProfile(userID) {
    try {
        const record = await pb.collection('odysigne').getOne(userID);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération du profil : ", error);
        throw error;
    }
}

export async function updateUserProfile(userID, userData) {
    try {
        const record = await pb.collection('odysigne').update(userID, userData);
        console.log('Profil utilisateur modifié :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification du profil : ", error);
        throw error;
    }
}

export async function updateUserPseudo(userID, newPseudo) {
    try {
        const record = await pb.collection('odysigne').update(userID, { pseudo: newPseudo });
        console.log('Pseudo modifié :', record.pseudo);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification du pseudo : ", error);
        throw error;
    }
}

export async function updateUserAvatar(userID, avatarFile) {
    try {
        const formData = new FormData();
        formData.append('avatar', avatarFile);

        const record = await pb.collection('odysigne').update(userID, formData);
        console.log('Avatar modifié :', record.avatar);
        return record;
    } catch (error) {
        console.error("Erreur lors de la modification de l'avatar : ", error);
        throw error;
    }
}

export async function deleteUserAvatar(userID) {
    try {
        const record = await pb.collection('odysigne').update(userID, { avatar: null });
        console.log('Avatar supprimé');
        return record;
    } catch (error) {
        console.error("Erreur lors de la suppression de l'avatar : ", error);
        throw error;
    }
}

// ==================== AVENTURES ====================

export async function aventuresAll() {
    const records = await pb.collection('aventure').getFullList();
    return records;
}

export async function aventureByID(id) {
    const record = await pb.collection('aventure').getOne(id);
    return record;
}

// ==================== QUIZ ====================

export async function quizzAll() {
    const records = await pb.collection('quiz').getFullList();
    return records;
}

export async function quizByID(id) {
    const record = await pb.collection('quiz').getOne(id);
    return record;
}

// ==================== SUIVI ====================

export async function getSuiviLecons(userID) {
    try {
        const records = await pb.collection('suivi_lecons').getFullList({
            filter: `utilisateur = "${userID}"`
        });
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération du suivi des leçons : ", error);
        throw error;
    }
}

export async function getSuiviQuiz(userID) {
    try {
        const records = await pb.collection('suivi_quiz').getFullList({
            filter: `utilisateur = "${userID}"`
        });
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération du suivi des quiz : ", error);
        throw error;
    }
}

export async function addSuiviLecon(suiviData) {
    try {
        const record = await pb.collection('suivi_lecons').create(suiviData);
        console.log('Suivi leçon ajouté :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout du suivi : ", error);
        throw error;
    }
}

export async function addSuiviQuiz(suiviData) {
    try {
        const record = await pb.collection('suivi_quiz').create(suiviData);
        console.log('Suivi quiz ajouté :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de l'ajout du suivi quiz : ", error);
        throw error;
    }
}

// ==================== ABONNEMENTS ====================

export async function getAbonnements() {
    try {
        const records = await pb.collection('abonnement').getFullList();
        return records;
    } catch (error) {
        console.error("Erreur lors de la récupération des abonnements : ", error);
        throw error;
    }
}

export async function getAbonnementByID(id) {
    try {
        const record = await pb.collection('abonnement').getOne(id);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération de l'abonnement : ", error);
        throw error;
    }
}

export async function createSouscription(souscriptionData) {
    try {
        const record = await pb.collection('souscription').create(souscriptionData);
        console.log('Souscription créée :', record);
        return record;
    } catch (error) {
        console.error("Erreur lors de la création de la souscription : ", error);
        throw error;
    }
}

export async function getUserSouscription(userID) {
    try {
        const record = await pb.collection('souscription').getFirstListItem(`utilisateur = "${userID}"`);
        return record;
    } catch (error) {
        console.error("Erreur lors de la récupération de la souscription : ", error);
        throw error;
    }
}
