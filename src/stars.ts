function addStars() {
  for (let i = 0; i < 36; i++) {
    const angle = (2 * Math.PI * i) / 36;
    const radius = 120;
    const xpos = 200;
    const ypos = 150;
    this.add.image(
      xpos + radius * Math.cos(angle),
      ypos + radius * Math.sin(angle),
      "star"
    );
  }
}
