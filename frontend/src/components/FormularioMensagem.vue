<template>
  <div class="message-container">
    <p class="message-text">
      {{ msg }}
    </p>
  </div>
</template>

<script>

    export default {
        name: 'MessageForm',
        data() {
            return {
              
            }
        },
        props: {
            msg: String,
        }
    }

</script>

<style scoped>

.message-container{
  width: 100%;
  max-width: 450px;
  margin: 20px auto 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 18px;

  background: #e7f1ff;
  color: #1d4ed8;

  border-left: 5px solid #4da3ff;
  border-radius: 6px;

  box-shadow: 0 4px 10px rgba(0,0,0,0.05);

  animation: fadeIn 0.3s ease;
}

.message-text{
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}

@keyframes fadeIn{
  from{
    opacity: 0;
    transform: translateY(-5px);
  }

  to{
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width:600px){

  .message-container{
    max-width: 100%;
    padding: 12px;
    font-size: 13px;
  }

}

</style>