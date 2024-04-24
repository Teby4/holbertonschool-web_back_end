#!/usr/bin/env python3
"""This module provides a function for calculating the floor of a floating-point number."""

from math import floor as math_floor


def floor(n: float) -> float:
    """Calculate the floor of a floating-point number.

    Args:
        n (float): The input floating-point number.

    Returns:
        float: The largest integer less than or equal to `n`.

    """
    return math_floor(n)