<template>
  <div class="container">
<form @submit.prevent="submitForm">

<div class="field">
  <label class="label">Başlık</label>
  <div class="control">
    <input v-model="post.title" class="input" type="text" placeholder="Title">
  </div>
</div>





<div class="field">
  <label class="label">Anlat Bakalım</label>
  <div class="control">
    <textarea v-model="post.content" class="textarea" placeholder="..."></textarea>
  </div>
</div>


  <div class="field">
  <label class="label">Sen Kimsin</label>
  <div class="control">
    <input v-model="post.creator" class="input" type="text" placeholder="Furkan, Sude, Erman ????">
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button type="submit" class="button is-link">Submit</button>
  </div>
  
</div>

</form>
    

  </div>
</template>

<script>
export default {
    props: ['post','submitForm'],
}
</script>

<style>

</style>