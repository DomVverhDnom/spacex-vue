<template>
  <header class="header">
    <img src="../logo.svg" alt="Logo Space X" class="logo" />
    <nav class="main-nav nav">
      <ul class="list">
        <li class="item">
          <a href="#" class="item-link">Falcon 1</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Falcon 9</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Falcon Heavy</a>
        </li>
        <li class="item">
          <a href="#" class="item-link">Updates</a>
        </li>
      </ul>
    </nav>
    <nav class="secondary-nav">
      <ul class="list">
        <li class="item">
          <a href="#" class="item-link">Home</a>
        </li>
        <li class="item">
          <a href="calendar.html" class="item-link">Calendar</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  max-width: 1230px;
  width: 90%;
  margin: 50px auto 120px;
  display: flex;
  justify-content: space-between;
}

.secondary-nav .item-link {
  color: #808080;
}

.secondary-nav .item:last-child .item-link {
  margin-right: 0;
}

.item-link.active {
  color: #33ff33;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    margin: 30px auto;
  }

  .header .logo {
    margin-bottom: 20px;
  }

  .header .main-nav {
    margin-bottom: 20px;
  }
}
</style>
