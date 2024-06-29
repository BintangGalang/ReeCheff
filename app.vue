<template>
  <div>
    <header>
      <div class="container">
        <div class="logo">
          <img src="/logo.png" alt="Food Wagon" />
        </div>
        <div class="location">
          <span>Deliver to:</span> <strong>Mohammadpur Bus Stand, Dhaka</strong>
        </div>
        <div class="actions">
          <button class="search-food">Search Food</button>
          <button class="login">Login</button>
        </div>
      </div>
    </header>

    <main>
      <section class="hero">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div class="search">
          <button class="delivery active">Delivery</button>
          <button class="pickup">Pickup</button>
          <input type="text" placeholder="Enter Your Address" />
          <button class="find-food">Find Food</button>
        </div>
        <div class="food-image">
          <img src="/food-image.png" alt="Food" />
        </div>
      </section>

      <section class="food-gallery">
        <div class="food-item"><img src="/food1.jpg" alt="Food 1" /></div>
        <div class="food-item"><img src="/food2.jpg" alt="Food 2" /></div>
        <div class="food-item"><img src="/food3.jpg" alt="Food 3" /></div>
        <div class="food-item"><img src="/food4.jpg" alt="Food 4" /></div>
      </section>
    </main>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.location {
  font-size: 14px;
}

.actions {
  display: flex;
  gap: 10px;
}

.actions button {
  background-color: #ff9900;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.hero {
  background-color: #ffcc00;
  text-align: center;
  padding: 50px 20px;
  position: relative;
}

.hero h1 {
  font-size: 3em;
  margin: 0;
}

.hero p {
  font-size: 1.2em;
  margin: 10px 0;
}

.search {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.search button,
.search input {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.search .delivery,
.search .pickup {
  background-color: #fff;
  cursor: pointer;
}

.search .delivery.active {
  background-color: #ff9900;
  color: #fff;
}

.search input {
  flex: 1;
  max-width: 300px;
}

.search .find-food {
  background-color: #ff9900;
  color: #fff;
}

.food-image img {
  max-width: 100%;
  height: auto;
  position: absolute;
  bottom: -20px;
  right: 20px;
}

.food-gallery {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background-color: #fff;
}

.food-item img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
