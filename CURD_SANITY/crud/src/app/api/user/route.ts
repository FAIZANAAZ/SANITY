import { NextRequest, NextResponse } from "next/server";



export async function GET(res:NextRequest) {

    return  NextResponse.json(
        [
            {
              "name": "faiza",
              "age": "3",
              "id": "1"
            },
            {
              "name": "nimra",
              "age": "6",
              "id": "2"
            },
            {
              "name": "wania",
              "age": "4",
              "id": "3"
            },
            {
              "name": "zara",
              "age": "7",
              "id": "4"
            },
            {
              "name": "ali",
              "age": "6",
              "id": "5"
            },
            {
              "name": "aysha",
              "age": "2",
              "id": "6"
            },
            {
              "name": "areeba",
              "age": "8",
              "id": "7"
            },
            {
              "name": "alina",
              "age": "2",
              "id": "8"
            },
            {
              "name": "sania",
              "age": "7",
              "id": "9"
            },
            {
              "name": "shama",
              "age": "7",
              "id": "10"
            }
          ]
    )
    
}