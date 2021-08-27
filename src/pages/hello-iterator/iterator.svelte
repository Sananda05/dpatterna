<script>
    import{getData} from "./load-weatherdata"
    import { onMount } from 'svelte';
    
    
    onMount(async () => {
 
    const iterator = getData()
    console.log('Straight traversal:');
   
    while ((await iterator).valid) {
      console.log( iterator.next());
      //data = (await iterator).next()
    }
});
</script>
<h1>Iterator Pattern</h1>




  
 

 
  