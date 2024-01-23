const { createApp, ref, watch } = Vue;

createApp({
  setup() {
    const input = ref()
    const list = ref([])
    const activeTab = ref('new')
    const tabList = ['all', 'new', 'removed', 'done']

    function addElement() {
      if(!input.value) return;
      list.value.unshift({
        title: input.value,
        status: 'new'
      })
      input.value = ""
    }

    function deleteItem(index) {
      if (list.value[index].status === 'removed') {
        list.value.splice(index, 1)
        return
      }
      list.value[index].status = 'removed'
    }
    function completeItem(index) {
      list.value[index].status = 'done';
    }

    // function saveData() {
    //   localStorage.setItem('todoList', JSON.stringify(list.value))
    // }

    // function loadData() {
    //   const savedData = localStorage.getItem('todoList')
    //   if (savedData) {
    //     list.value = JSON.parse(savedData)
    //   }
    // }

    // watch(list, saveData)
  

    return {
      addElement,
      input,
      list,
      activeTab,
      tabList,
      deleteItem,
      completeItem,
      // loadData
    };
  }
}).mount('#app'); 