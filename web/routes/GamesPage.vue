<template>
  <h1>Welcome to the Fake Money Casino</h1>
  <p>Balance: ${{state.balance}}</p>

  <!-- Slots Game -->
  <div class="game">
    <h2>Slots</h2>
    <button @click="playSlots()">Play Slots</button>
    <p id="slots-result">Press Play to try your luck!</p>
  </div>

  <!-- Roulette Game -->
  <div class="game">
    <h2>Roulette</h2>
    <button @click="playRoulette()">Spin Roulette</button>
    <p id="roulette-result">Press Spin to play!</p>
  </div>

  <!-- Blackjack Game -->
  <div class="game">
    <h2>Blackjack</h2>
    <button @click="playBlackjack()">Play Blackjack</button>
    <p id="blackjack-result">Press Play to draw a hand!</p>
  </div>

  <!-- Bingo Game -->
  <div class="game">
    <h2>Bingo</h2>
    <button @click="playBingo()">Play Bingo</button>
    <p id="bingo-result">Press Play to start Bingo!</p>
  </div>

  <!-- Russian Roulette Game -->
  <div class="game">
    <h2>Russian Roulette</h2>
    <button @click="playRussianRoulette()">Play Russian Roulette</button>
    <p id="russian-roulette-result">Press Play to take a risk!</p>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from 'vue';
import {RouterLink} from 'vue-router';

export default {
  name: 'GamesPage',
  components: {RouterLink},
  setup() {
    const state = reactive({
      balance: 1000
    });

    // Function to update balance display
    const assertBalance = () => {
      if(state.balance <= 0) {
        alert(`Game over! You've run out of money.`);
        state.balance = 1000;  // Reset balance
      }
    };

    // Slots Game Logic
    const playSlots = ref(() => {
      // 50% chance to win
      const won = Math.random() < 0.5;
      const winnings = won ? Math.floor(Math.random() * 200) + 50 : 0;
      
      if(won) {
        state.balance += winnings;
        document.getElementById('slots-result').innerText = `You won $${winnings}!`;
      } else {
        state.balance -= 50;
        document.getElementById('slots-result').innerText = 'You lost $50!';
      }

      assertBalance();
    });

    // Roulette Game Logic
    const playRoulette = ref(() => {
      const bet = 100; // Fixed bet amount
      let outcome = Math.floor(Math.random() * 37); // Random number from 0 to 36
      let playerChoice = Math.floor(Math.random() * 37); // Simulate player choice

      if(outcome === playerChoice) {
        state.balance += bet * 35;  // Win 35x bet on a correct number
        document.getElementById('roulette-result').innerText = `You hit the number ${outcome} and won $${bet * 35}!`;
      } else {
        state.balance -= bet;
        document.getElementById('roulette-result').innerText = `You lost $${bet}. Number was ${outcome}.`;
      }

      assertBalance();
    });

    // Blackjack Game Logic
    const playBlackjack = ref(() => {
      let playerCard = Math.floor(Math.random() * 11) + 1 + Math.floor(Math.random() * 11) + 1; // Two random cards
      let dealerCard = Math.floor(Math.random() * 11) + 1 + Math.floor(Math.random() * 11) + 1; // Dealer's two cards
      
      if(playerCard > 21) playerCard = 21; // Simulate bust
      if(dealerCard > 21) dealerCard = 21; // Simulate dealer bust

      if(playerCard > dealerCard) {
        state.balance += 100;
        document.getElementById('blackjack-result').innerText = `You won! Your score: ${playerCard}, Dealer score: ${dealerCard}`;
      } else if (playerCard < dealerCard) {
        state.balance -= 100;
        document.getElementById('blackjack-result').innerText = `You lost! Your score: ${playerCard}, Dealer score: ${dealerCard}`;
      } else {
        document.getElementById('blackjack-result').innerText = `It's a tie! Both scored ${playerCard}.`;
      }

      assertBalance();
    });

    // Bingo Game Logic
    const playBingo = ref(() => {
      let playerNumber = Math.floor(Math.random() * 10) + 1;
      let drawnNumber = Math.floor(Math.random() * 10) + 1;

      if(playerNumber === drawnNumber) {
        state.balance += 150;
        document.getElementById('bingo-result').innerText = `Bingo! Your number ${playerNumber} matched the drawn number. You won $150!`;
      } else {
        state.balance -= 20;
        document.getElementById('bingo-result').innerText = `No match! Drawn number was ${drawnNumber}. You lost $20.`;
      }

      assertBalance();
    });

    // Russian Roulette Game Logic
    const playRussianRoulette = ref(() => {
      let bulletChamber = Math.floor(Math.random() * 6) + 1;
      let playerChamber = Math.floor(Math.random() * 6) + 1;

      if(bulletChamber === playerChamber) {
        state.balance = 0;  // Player loses all balance if they "lose"
        document.getElementById('russian-roulette-result').innerText = 'Bang! You lost everything!';
      } else {
        state.balance += 200;
        document.getElementById('russian-roulette-result').innerText = 'Click! You survived and won $200!';
      }

      assertBalance();
    });

    return {
      state,
      playSlots,
      playRoulette,
      playBlackjack,
      playBingo,
      playRussianRoulette
    };
  }
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

h1 {
  color: #333;
}

.game {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
}

p {
  font-size: 20px;
}
</style>
