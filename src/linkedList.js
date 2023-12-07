import { Component } from "react";

class Component (NBA_List) {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

        add(data) {
            const newNode = new Node(data);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }
            this.length++;
            return this;

        }

        addAtPostion (data, position) {
            let newNode = new Node(data);
            if (position === 1) {
                newNode.next = this.head;
                this.head = newNode;
                return;
            }
            let current =this.head;
            let i =1;
            while (i < position - 1 && current) {
                current = current.next;
                i++;
            }
            if (current) {
                newNode.next = current.next;
                current.next = newNode;
            }
        }

        remove(data) {
            if (!this.head) {
                return null;
            }
            if (this.head.data === data) {
                this.head = this.head.next;
                this.length--;
                return thiis;
            }
            let current = this.head;
            while (current.next) {
                if (current.next.data === data) {
                    current.next = current.next.next;
                    this.length--;
                    return this;
                }
                current = current.next;
            }
            return null;
        }


        printAll() {
            let current = this.head;
            while (current) {
                console.log(current.data);
                current = current.next;
            }
        }

    }
}
    const list = new LinkedList();

    list.add ("Lebron James");
    list.add ("Giannis Antetounmpo");
    list.add ("Steph Curry");
    console.log("Initial NBA Top 3 favourites: ");
    list.printAll();

    console.log("2023 Top 3 NBA list");
    list.addAtPostion("Nikola Jokic", 1);
    list.remove("Lebron James");
    list.addAtPostion("Kevin Durant", 3);
    list.remove("Steph Curry");
    list.printAll();


export default NBA-List