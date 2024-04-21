#!/usr/bin/env python3
"""task 10"""


from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """element lenght"""
    return [(i, len(i)) for i in lst]
