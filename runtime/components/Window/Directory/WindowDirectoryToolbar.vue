<script setup lang="ts">
defineEmits(['back', 'forward', 'up', 'cut', 'copy', 'paste', 'undo', 'delete', 'properties'])
</script>

<template>
  <div>
    <Button variant="text" @click="$emit('back')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhHgAaAKECAAAAAP///7KysrKysiH5BAEKAAIALAAAAAAeABoAAAJblI8GkO2vGJxtLYqPlRmuEFydB4DimHxgyKFauZ6uurLbjbd0nPfiXgsKgz/Y8DjcIJdJC/PJi0CZxelSBrT5cIjstlcxslwpsYwsHaO7sPNasHmX3XL62/4oAAA7"
          style="width: 15px"
        />
      </div>
      {{$t('apps.explorer.action.back')}}
    </Button>
    <Button variant="text" @click="$emit('forward')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhHgAaAKECAAAAAP///7KysrKysiH5BAEKAAIALAAAAAAeABoAAAJblI8pAOrvGJyQSYqNbRmzEFzd84XcGAEgKKJHyZ7vRtfw2tq6teLy3QsKgxfg8NgrqpBM4aYJ9RmjRM6U6tPsdM7f1tZ1zZIy8a1lXqLFC3WZvWGn1nK6vI0pAAA7"
          style="width: 15px"
        />
      </div>
      {{$t('apps.explorer.action.forward')}}
    </Button>
    <Divider layout="vertical" />
    <Button variant="text" @click="$emit('up')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhKAAiAKECAAAAAP///7KysrKysiH5BAEKAAIALAAAAAAoACIAAAJ/lA+pu+cPo2BUyRtT2Lz3hIUT4JUcKGakyW5oiqyt+abVjef6zu/zDzwpgsTWooj0HJPMJUvDVA6NsqhrWqJYr9AsYxtwCm9WMbdSxtKq6e4afJ6522wpPKz23s12OP9T15TXB/Y31hOINyeFmGh4B7gIyZg4GWf51Ki5yalTAAA7"
          style="width: 15px"
        />
      </div>
      {{$t('apps.explorer.action.up')}}
    </Button>
    <Button variant="text" @click="$emit('cut')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhHgAoAKEDAAAAAMDAwP///7KysiH5BAEKAAMALAAAAAAeACgAAAK73IBgy22pGnR0TQuEQLUizR3ZFnXSGH4aaT4jGKlwK64sNrdqyOxl53PIbsIXEbfinWzKHurnzHmeUyllqMRCl8mflhZENoFU8bba/dJqaePY5AuvzfI5G2ada/P2+Ln/9AbI9KfnVngFcaioOAVByHjhFEBZSZkCYGmZlal5GdPpifkJ8elCmoCKimAqstpZGjAqC9rKSns7q1uLC6to6xsr/Et72pvLu7l1qzypOcZcCd1IJnliXWRdAAA7"
          style="width: 15px"
        />
      </div>
      {{$t('apps.explorer.action.cut')}}
    </Button>
    <Button variant="text" @click="$emit('copy')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhKAAoAKEDAAAAAICAgP///7KysiH5BAEKAAMALAAAAAAoACgAAALHhI+Zw+3/lJSwViOy3lwgCw5YR2ZfeAFlORpopK5dC7zOKG+4V9t7ztP1XruJ0WgpHpcnyI/zlDUbUU2VdXDGTBKgkHvb8hRea8xFFc/UOSXjGizHwSLxZBPI6/PCYz+Bt6f3d7cCV4YgxSZnpkSmIRgp+Ed4ECgpSWm4yDjGydVJktgICImZSVq5c4rKBXfoNYoVuvYqxhqpOWuKO0jKRAvFZBlsRnTb60sXsprMZ4wCC4TG/ClHDSLdNpRtjcidNCx+LM5UAAA7"
          style="width: 20px"
        />
      </div>
      {{$t('apps.explorer.action.copy')}}
    </Button>
    <Button variant="text" @click="$emit('paste')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhJgAkAMIEAAAAAICAgMDAwP///7KysrKysrKysrKysiH5BAEKAAQALAAAAAAmACQAAAPpSLoM/tCxSWuL2GqC4fjg1z3b6IShCVhOEAiCe4IeDcAuLE3tGwcz0SN1++lWvKKsCGs6nw4cEHmRRp9Y53VJ6R1Vo5xgdxGDTWbqYusTu9twq1rBltqN+Dd5DXjf/Xk+e3R9cYF/hoMcSoaAjlNdjIiTgYpehz9nEJGPcppzi5RpKKQDm3yiggClKKeEnZmrrDZCr41wQbMzO3WYMy7AAUQjqUcfwS7DHbBLs7oPzFPOrBDFY7LI2cBCvYC/2tm1i5/TpbyfsuVEG5HH4Mji7Hzu79umoCXp6vHyi/vr/QihixBQ4MAHCQAAOw=="
          style="width: 19px"
        />
      </div>
      {{$t('apps.explorer.action.paste')}}
    </Button>
    <!--
    <Divider layout="vertical" />
    <Button variant="text" @click="$emit('undo')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhJAAcAKEDAAAAAMDAwP///7KysiH5BAEKAAMALAAAAAAkABwAAAKWnI+ZwO0K43JU2uOECEFzzVxStnUlCCDh2Hzn665r5Li2GafDM3l4QGn4UDwVYFgKMpAk2fFV7CWFAiezQXtyaqYlVGdh5MRdbVlEJpqvIoN3S72h2jszl02vjwHyKrid5vf2MwdoF0foRzd4B3PG4uPUlxN26KaEOTNBWZeplMWZxxIqOvpYCjmFWhn5tzoR9aoQpFAAADs="
          style="width: 19px"
        />
      </div>
      {{$t('apps.explorer.toolbar.undo')}}
    </Button>
    -->
    <Button variant="text" @click="$emit('delete')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhJAAkAKECAAAAAIAAgLKysrKysiH5BAEKAAIALAAAAAAkACQAAAKEhC+py+150JsUxlursVfmtylGEHSf6KGkeQoReK1A9k6dTKdUFzb1yZs5fi1Oilg09ly6ZELGcjagGCkMaWVEs4vgkusVgqvGMRELJGubOTTzqzmQ2uL4KECnu31s1HbXF+QEp9QHyBeBI7V0U1JXxMjDhag2+QYwZ8lklGkZqWnzqFkAADs="
          style="width: 18px"
        />
      </div>
      {{$t('apps.explorer.action.delete')}}
    </Button>
    <Divider layout="vertical" />
    <Button variant="text" @click="$emit('properties')">
      <div class="p-button-image">
        <img
          class="mx-auto"
          src="data:image/gif;base64,R0lGODlhJAAmAMIEAAAAAICAgMDAwP///7KysrKysrKysrKysiH5BAEKAAQALAAAAAAkACYAAAPSSLrcCzBKqKS7bWpQI8bQMAiCSJoCFKzBd4VjGaMq6zIQCZ9zzLa3jg6AKvpYm81waOT9kpplithzIqmi7CA3le5ktRVMK+KaAcxeODDOnsvo7hQaIW/jsPOQ3ob372laFA9YbnVkb4gchHaNio6DHY6Td5CLkpSZdpEEf5qUnG0SfnyCl52Fo3d8qaeen5Y4hbCgrq15rK2yprispru0mqGzwY3DvFS5uoyGvaWGwMWTx9LTtsikdL/MpNlQ25jVxtfi49Hl4Kjom7bK7u3vuQwJADs="
          style="width: 18px"
        />
      </div>
      {{$t('apps.explorer.action.properties')}}
    </Button>
  </div>
</template>

<style scoped lang="scss">
.p-button {
  text-align: center;
  vertical-align: top;
  min-width: 50px;
  height: 50px;
  margin-bottom: 5px;

  &-image {
    display: grid;
    align-items: center;
    height: 32px;

    img {
      pointer-events: none;
      vertical-align: middle;
    }
  }
}

.p-divider {
  display: inline-flex;
  width: 1px;
}
</style>
