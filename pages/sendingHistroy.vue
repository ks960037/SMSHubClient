<template>
    <div class="container-fluid py-4">
        <div class="row">
            <div class="col-12 mt-4 mt-md-0">
                <ReviewCard title="Reviews" description="More than
          <b>1,500,000</b> developers used Creative Tim's products and over
          <b>700,000</b> projects were created." :reviews="[
              {
                  title: '用量',
                  value: 80,
                  color: 'info',
              }
          ]" />
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-12">
                <Table />
            </div>
        </div>
    </div>
</template>

<script setup>
import ReviewCard from "~~/pagesComponents/pages/users/ReviewCard.vue";
import Table from "~~/pagesComponents/pages/users/Table.vue";

definePageMeta({
    layout: "default",
});
</script>