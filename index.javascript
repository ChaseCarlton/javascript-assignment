let cityName = "Techville";
let parkCount = 5;
let parks = [
    {
        name: "Central Park",
        trees: [
            { species: "Maple", age: 5, health: "Good", height: 20 },
            { species: "Birch", age: 7, health: "Good", height: 18 }
        ],
        facilities: ["playground", "swimming pool"]
    },
    {
        name: "Riverside Park",
        trees: [
            { species: "Oak", age: 30, health: "Excellent", height: 25 },
            { species: "Redwood", age: 50, health: "Good", height: 100 }
        ],
        facilities: ["boating", "fishing"]
    },
    {
        name: "Hilltop Park",
        trees: [
            { species: "Pine", age: 10, health: "Fair", height: 15 }
        ],
        facilities: ["hiking trails"]
    }];


// Task 1: Using array and object manipulation, change the name of "Riverside Park" to "Riverside Greenspace" for the relevant tree in the Parks Array.
// Your code here
parks = parks.map(park => {
    if (park.name === "Riverside Park") {
        park.name = "Riverside Greenspace";
    }
    return park;
});
// Task 2: Utilize array and object manipulation to change the name of the tree species "Maple" to "Sugar Maple" for the relevant tree located in "Central Park" within the parks array.
// Your code here
parks = parks.map(park => {
    if (park.name === "Central Park") {
        park.trees = park.trees.map(tree => {
            if (tree.species === "Maple") {
                tree.species = "Sugar Maple";
            }
            return tree;
        });
    }
    return park;
});

// Task 3: Employ array and object manipulation to add a new tree with species "Birch", age 7, health "Good", location "Central Park", and height 18 to the parks array.
// Your code here
let newTree = { species: "Birch", age: 7, health: "Good", height: 18 };
parks = parks.map(park => {
    if (park.name === "Central Park") {
        park.trees.push(newTree);
    }
    return park;
});

// Task 4: Using array and object manipulation, retrieve a list of all tree species located in "Central Park". Store the list in a variable named centralParkTrees.
// Your code here
let centralParkTrees = parks.find(park => park.name === "Central Park").trees.map(tree => tree.species);

// Task 5: Use code to calculate and store the average age of all the trees in the parks array into a variable named averageTreeAge.
// Your code here
let totalTrees = parks.reduce((acc, park) => acc + park.trees.length, 0);
let totalAge = parks.reduce((acc, park) => acc + park.trees.reduce((treeAcc, tree) => treeAcc + tree.age, 0), 0);
let averageTreeAge = totalAge / totalTrees;
// Task 6: Use code to determine which tree is the tallest among all the trees in the parks array. Store the tallest tree in a variable named tallestTree.
// Your code here
let tallestTree = parks.reduce((tallest, park) => {
    let parkTallestTree = park.trees.reduce((max, tree) => tree.height > max.height ? tree : max, {height: 0});
    return parkTallestTree.height > tallest.height ? parkTallestTree : tallest;
}, {height: 0});
// Task 7: Using array and object manipulation, remove the facility "playground" from the facilities array in "Central Park" which is located in the parks array.
// Your code here
parks = parks.map(park => {
    if (park.name === "Central Park") {
        park.facilities = park.facilities.filter(facility => facility !== "playground");
    }
    return park;
});
// Task 8: Using code, convert the parks array into a JSON Object and store it into a variable called parksJSON.
// Your code here
let parksJSON = JSON.stringify(parks);
// Task 9: Using console.log, display the name and facilities of the first item in the parks array.
// Your code here
console.log(`Name: ${parks[0].name}, Facilities: ${parks[0].facilities.join(', ')}`);
// Task 10: Using console.log, display the species of the third item in the parks array.
// Your code here
console.log(`Species in ${parks[2].name}: ${parks[2].trees.map(tree => tree.species).join(', ')}`);
