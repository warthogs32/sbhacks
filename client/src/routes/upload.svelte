<script>
    function onSubmit(data){
        validate_data(data)
    }
</script>

<form>
    <input type="image" />
    <div class="flex flex-row">
        <label for="yellow">Yellow</label>
        <input type="radio" name="color" id= "yellow" />
        <label for="green">Green</label>
        <input type="radio" name="color" id= "green" />
        <label for="brown">Brown</label>
        <input type="radio" name="color" id= "brown" />
        <label for="black">Black</label>
        <input type="radio" name="color" id= "black" />
    </div>
    <div class = "flex flex-row">
        <label for="smooth">Smooth</label>
        <input type="radio" name="consistency" id="smooth" />
        <label for="rough">Rough</label>
        <input type="radio" name="consistency" id="rough" />
    </div>
    <input type="submit" value="Submit">
</form>