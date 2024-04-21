#!/usr/bin/env python3


from pymongo import MongoClient


def update_topics(mongo_collection, name, topics):
    return mongo_collection.update({"name": name}, {"$set": {"topics": topics}})
