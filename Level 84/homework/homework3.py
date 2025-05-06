# def to_binary(n):
#     res = 0
#     i = 0
#     arr = []
#     while res < n:
#         res += 2 ** i
#         arr.append(2 ** i)
#         i += 1
    
#     arr = reverse_arr(arr)
#     comp = res - n
#     item_del = item_to_be_deleted(arr, comp)
#     for i in range(len(arr)):
#         if arr[i] in item_del:
#             arr[i] = 0
#             continue
#         arr[i] = 1
        
#     return convert_to_number(arr)
    
# def reverse_arr(arr):
#     min = 0
#     max = len(arr)-1
#     while min < max:
#         temp = arr[min]
#         arr[min] = arr[max]
#         arr[max] = temp
#         min += 1
#         max -= 1
#     return arr

# def convert_to_number(arr):
#     str_res = ''
#     for i in arr:
#         str_res += str(i)
#     return int(str_res)

# def item_to_be_deleted(arr, comp):
#     res = []
#     sum = 0
#     for i in range(len(arr)):
#         sum += arr[i]
#         if sum > comp:
#             sum -= arr[i]
#             continue
#         res.append(arr[i])
#     return res