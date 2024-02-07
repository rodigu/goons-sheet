class Goon {
  constructor(name, description, brute, skulker, erudite) {
    this.name = name;
    this.description = description;
    this.brute = brute;
    this.skulker = skulker;
    this.erudite = erudite;
    this.health = 10;
    this.maxHEalth = 10;
    this.inventory = ["ration", "ration"];
    this.inventoryScore = 8;
    this.level = 1;
  }

  addItem(item) {
    if (this.inventory.length == this.inventoryScore) return false;
    this.inventory.push(item);
  }

  static childhoods = [
    { title: "Desert Urchin", skill: "S", item: "Waterskin" },
    { title: "Garden Acolyte", skill: "E", item: "Shovel" },
    { title: "Wheel Rat", skill: "B", item: "Hammer" },
    { title: "Smoke Scrub", skill: "S", item: "Rope" },
    { title: "Book Fetch", skill: "E", item: "Quill & Ink" },
    { title: "Gear Lark", skill: "B", item: "Crowbar" },
  ];

  static professions = [
    { title: "Caravan Drifter", skill: "S", item: "Parasol" },
    { title: "Botany Priest", skill: "E", item: "Rose Incense" },
    { title: "Slab Dragger", skill: "B", item: "Black Mallet" },
    { title: "Lock Snipe", skill: "S", item: "Lock Pick" },
    { title: "Library Guide", skill: "E", item: "Lantern" },
    { title: "Pit Warden", skill: "B", item: "Tusk Spear" },
  ];

  static inTheWar = [
    { title: "Joined the militia", item: "Shield" },
    { title: "Went underground", item: "Torch" },
    { title: "Joined the rebels", item: "Bear Trap" },
    { title: "Fled", item: "Compass" },
    { title: "Gathered intel", item: "Mirror" },
    { title: "Profiteered", item: "Item of Choice" },
  ];

  static roll(name) {
    const childhood = Goon.childhoods[Goon.rollD6()];
    const profession = Goon.professions[Goon.rollD6()];
    const war = Goon.inTheWar[Goon.rollD6()];

    let brute = (childhood.skill == "B") + (profession.skill == "B");
    let skulker = (childhood.skill == "S") + (profession.skill == "S");
    let erudite = (childhood.skill == "E") + (profession.skill == "E");

    return new Goon(
      name,
      `${name} was a ${childhood.title} in their childhood. As an adult, they worked as a ${profession.title}. During the war, they ${this.inTheWar.title}`,
      brute,
      skulker,
      erudite
    );
  }

  static rollD6() {
    return Math.ceil(Math.random() * 6);
  }
}
