# Codewars 7 kyu: Thinkful - Object Drills: Quarks

class Quark(object):
    _COLOR = frozenset(["red", "blue", "green"])
    _FLAVOR = frozenset(['up', 'down', 'strange', 'charm', 'top', 'bottom'])
    baryon_number = 1 / 3

    def __init__(self, color, flavor):
        if color in self._COLOR:
            self.color = color
        else:
            raise ValueError(f"{color} is not allowed color for quarks!")
        if flavor in self._FLAVOR:
            self.flavor = flavor
        else:
            raise ValueError(f"{flavor} is not allowed flavor for quarks!")

    def interact(self, quark):
        self.color, quark.color = quark.color, self.color