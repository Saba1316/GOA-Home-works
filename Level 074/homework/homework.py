# Codewars 8 kyu: 8kyu interpreters: HQ9+


def HQ9(code):
    lyrics = []
    match code:
        case 'H':
            return 'Hello World!'
        case 'Q':
            return code
        case '9':
            for i in range(99, 0, -1):
                bottles = f"{i} bottle{'s' if i > 1 else ''} of beer"
                next_bottles = f"{i-1} bottle{'s' if i > 2 else ''} of beer" if i > 1 else "no more bottles of beer"
                lyrics.append(f"{bottles} on the wall, {bottles}.")
                lyrics.append(f"Take one down and pass it around, {next_bottles} on the wall.")
            lyrics.append("No more bottles of beer on the wall, no more bottles of beer.")
            lyrics.append("Go to the store and buy some more, 99 bottles of beer on the wall.")
            return '\n'.join(lyrics)