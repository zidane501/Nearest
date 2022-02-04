from pymongo import MongoClient
# print("hi")
# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
def addEntrysToMongoDB(item)
    client = MongoClient("mongodb+srv://sunny:qD7hsawC9gNCur5W@cluster0.ud157.mongodb.net/NearestButikker?retryWrites=true&w=majority") # 
    # db = client.test

    dbname=client["NearestButikker"]
    # Issue the serverStatus command and print the results
    # serverStatusResult=db.command("serverStatus")
    # p# print(serverStatusResult)



    collection_name = dbname["Butikker"]

    # item_1 = {

    # "Butik" : "Netto",
    # "address" : "some test address",
    # "lat": "99999",
    # "lng":"99999"
    # }

    collection_name.insert_one(item)