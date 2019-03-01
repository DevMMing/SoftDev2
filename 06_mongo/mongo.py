# Shafali Gupta
# SoftDev2 pd08
# K#06: Yummy Mango Py
#2019-02-28

import pymongo

SERVER_ADDR="167.99.14.95"
connection =pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def boro(borough):
    restuarants = collection.find({'borough':borough})
    for x in restaurants:
        print(x)

def zipcode(zip):
    restaurants = collection.find({'address.zipcode': zip})
    for x in restaurants:
        print(x)

def zip_grade(zip, grade):
    restaurants = collection.find({'address.zipcode': zip, "grade": grade})
    for x in restaurants:
        print(x)

def zip_badgrade(zip, grade):
    restaurants = collection.find({'address.zipcode': zip, "grade": {"$lt":grade}})
    for x in restaurants:
        print(x)
def add(cuisine, grade):
    restaurants = collection.find({'cuisine': cuisine, "grade": {"$gt":grade}})
    for x in restaurants:
        print(x)
