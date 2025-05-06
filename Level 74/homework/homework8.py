# Codewars 8 kyu: 
# Simple Fun #261: Whose Move


def whoseMove(lastPlayer, win):
    return lastPlayer if win else 'white' if lastPlayer == 'black' else 'black'