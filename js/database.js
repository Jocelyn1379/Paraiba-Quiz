import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, orderBy, limit, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Salvar pontuação do usuário
async function saveScore(userId, name, score) {
    try {
        await addDoc(collection(db, "scores"), {
            userId,
            name,
            score,
            timestamp: new Date()
        });
    } catch (e) {
        console.error("Error saving score: ", e);
    }
}

// Buscar ranking
async function getLeaderboard() {
    const q = query(
        collection(db, "scores"),
        orderBy("score", "desc"),
        limit(10)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
}

export { saveScore, getLeaderboard };