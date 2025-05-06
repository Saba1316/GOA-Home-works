# Codewars 7 kyu: Linked Lists - Append

# class Node(object):
#     def __init__(self, data):
#         self.data = data
#         self.next = None
        
# def last(head):
#     n = head
#     while n and n.next:
#     	n = n.next
#     return n

# def append(listA, listB):
#     if not listA:
#     	return listB
#     last(listA).next = listB
#     return listA