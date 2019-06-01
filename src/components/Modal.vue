<template>
  <div
    id="modalCenter"
    class="modal fade mymodal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalCenterTitle"
    aria-hidden="true"
  >
    <button
      id="xclose"
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
    <div
      class="modal-dialog modal-dialog-centered"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5
            id="modalLongTitle"
            class="modal-title"
          >
            {{ currentItem.text }}
          </h5>
        </div>
        <div class="modal-body">
          <a
            target="blank"
            :href="currentItem.url"
          >
            <img
              :src="currentItem.url"
              alt=""
              srcset=""
              class="modalimg"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "Modal",
    props:{
        currentItem: {
                type: Object,
                default: function () { return {} },
        },
    }

}
</script>

<style scoped>
.modalimg{
  width: 100%;
  max-height: 50vh;
  -o-object-fit: contain;
     object-fit: contain;
}
.mymodal{
  color: #fff;
  overflow: hidden;
}
.modal-header{
  text-align: center;
}
#xclose{
  position: absolute;
  top: 10%;
  right: 10%;
  color: #eeeeee;
  opacity: 1;
}
#modalCenter{
  background-color: #000000d4;
}
.mymodal .modal-content{
  background-color: black;
}
.modal-footer , .modal-header{
  border: none !important;
}
</style>
