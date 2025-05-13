# Leetcode: 853.Car Fleet

class Solution:
    def carFleet(self, target: int, position: list[int], speed: list[int]) -> int:
        ans = len(position)
        if ans == 0:
            return 0
        
        cars = sorted(zip(position, speed), key=lambda x: x[0])
        arrival_times = []

        for position, speed in cars:
            arrival_time = (target - position) / speed
            while arrival_times and arrival_time >= arrival_times[-1]:
                arrival_times.pop()
            arrival_times.append(arrival_time)
        return len(arrival_times)