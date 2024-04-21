#!/usr/bin/env python3


from pymongo import MongoClient


def schools_by_topic(mongo_collection, topic):
    return list(mongo_collection.find({"topics": topic}))
