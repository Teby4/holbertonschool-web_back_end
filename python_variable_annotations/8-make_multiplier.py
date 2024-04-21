#!/usr/bin/env python3
"""task 9"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return a function that multiplies a float"""
    def multiplierfunc(x: float) -> float:
        """returns a multiplication"""
        return x * multiplier
    return multiplierfunc
