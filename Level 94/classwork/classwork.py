# Leetcode: 7. Reverse Integer

class Solution:
    def reverse(self, x: int) -> int:
        answer = 0
        nm, nx = -(2**31), 2**31 - 1
        while x:
            if answer < nm // 10 + 1 or answer > nx // 10:
                return 0
            y = x % 10
            if x < 0 and y > 0:
                y -= 10
            answer = answer * 10 + y
            x = (x - y) // 10
        return answer