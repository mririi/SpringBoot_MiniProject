<template>
    <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Country</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="country" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Country
        </a>
        <div class="dropdown-menu" aria-labelledby="country">
          <a class="dropdown-item" href="#">List</a>
          <a class="dropdown-item" href="#">Add</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="continent" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Continent
        </a>
        <div class="dropdown-menu" aria-labelledby="continent">
          <a class="dropdown-item" href="#">List</a>
          <a class="dropdown-item" href="#">Add</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>