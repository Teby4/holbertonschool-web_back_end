#!/usr/bin/env python3
"""task 8"""


from pymongo import MongoClient


def list_all(mongo_collection):
    """list all documents"""
    return list(mongo_collection.find())
