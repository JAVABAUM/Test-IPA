import { doc, setDoc, updateDoc, getDoc } from "firebase/firestore";
import "firebase/firestore";
import "firebase/app";
import { getFirestore } from "firebase/firestore";

async function addCoinsToAccount(amount, accountID) {
  const db = getFirestore();
  const docRef = doc(db, "users", accountID);
  const docSnap = await getDoc(docRef);
  var coins = 0;

  if (docSnap.exists()) {
    coins = docSnap.data().coins;
    console.log(docSnap.data());
  } else {
    console.log("No such document!");
  }

  coins += amount;

  const account = doc(db, "users", accountID);

  await updateDoc(account, {
    coins: coins,
  });
}

async function getCoins(accountID) {
  const db = getFirestore();
  const docRef = doc(db, "users", accountID);
  const docSnap = await getDoc(docRef);
  var coins = 0;

  if (docSnap.exists()) {
    coins = docSnap.data().coins;
  } else {
    console.log("No such document!");
  }

  return coins;
}

async function getStats(accountID) {
    console.log(accountID);
    const db = getFirestore();
    const docRef = doc(db, "users", accountID);
    const docSnap = await getDoc(docRef);
    var stats = {};

    if (docSnap.exists()) {
        stats = docSnap.data();
    } else {
        console.log("No such document!");
    }

    return stats;
}

async function updateStats(accountID, statistic, change) {
    const db = getFirestore();
    const docRef = doc(db, "users", accountID);
    var data = {}
    var stats = getStats();

    stats.then((value) => {
        switch (statistic) {
            case "gamesWon":
                data = { gamesWon: value.gamesWon + change };
                break;
            case "gamesLost":
                data = { gamesLost: value.gamesLost + change };
                break;
            case "coinsWon":
                data = { coinsWon: value.coinsWon + change };
                break;
            case "coinsLost":
                data = { coinsLost: value.coinsLost + change };
                break;
        }

        if (data != {}) {
            await updateDoc(account, data});
        }
    })

    

}

export { addCoinsToAccount, getCoins, getStats };
