#!/usr/bin/env python3


from pymongo import MongoClient


def list_all(mongo_collection):
    """list all documents"""
    list_documents = list(mongo_collection.find())
    return list_documents