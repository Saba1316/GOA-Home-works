// Codewars 6 kyu: Lottery Ticket


const bingo = (ticket, win) => ticket
  .map(([a, b]) => a.includes(String.fromCharCode(b)))
  .filter(Boolean).length 
   >= win ? 'Winner!' : 'Loser!'