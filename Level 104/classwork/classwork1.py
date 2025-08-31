# Codewars 6 kyu: Positions Average

# # import numpy as np

# def pos_average(s):
#     '''Find common positions in strings, and return as a percentage of total positions'''
    
#     # Remove commas from the input string
#     s = s.replace(',', '')
    
#     # Split the string into a list of sequences
#     s = s.split(' ')
    
#     # Calculate the total number of unique sequence pairs (combinations of 2 from n sequences)
#     total = (len(s)*(len(s)-1))/2
    
#     # Convert each sequence string into a list of characters and store in a list
#     sequence_array = []
#     for sequence in s:
#         sequence_array.append(list(sequence))
    
#     # Convert the list of character lists into a NumPy array
#     arr = np.array(sequence_array)
    
#     # Counter to keep track of matching positions across different sequences
#     counter = 0

#     # Iterate over each position in the sequences (column-wise)
#     for i in range(0, arr.shape[1]):
#         print(arr[:,i])  # Print the column of characters at position i across all sequences
#         unique, counts = np.unique(arr[:,i], return_counts=True)  # Count frequency of each character in this column
#         print('unique', unique)
        
#         # For each unique character with more than one occurrence
#         for k in range(0, len(counts)):
#             print(counts[k])
#             if counts[k] > 1:
#                 # If a character appears n times in the same position across different strings,
#                 # it contributes (n-1 + n-2 + ... + 1) = sum of 1 to (n-1) matching pairs
#                 counter += np.sum(np.arange(1, counts[k]))
                
#     # Calculate and return the percentage of matching positions across all string pairs
#     return counter / (total * len(s[0])) * 100
