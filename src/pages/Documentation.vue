<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-8">System Documentation</h1>
    
    <div class="grid gap-6">
      <div 
        v-for="(doc, index) in documentations" 
        :key="index"
        class="card w-full bg-white rounded-lg shadow-md"
      >
        <div class="card-header p-4 border-b">
          <h2 class="text-xl font-semibold">{{ doc.title }}</h2>
        </div>
        <div class="card-content p-4">
          <div class="flex gap-4">
            <a 
              :href="doc.docLink"
              class="flex items-center gap-2 text-blue-600 hover:text-blue-800"
            >
              <i class="file-text-icon"></i>
              <span>Download Documentation</span>
            </a>
            <a 
              :href="doc.videoLink"
              class="flex items-center gap-2 text-red-600 hover:text-red-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="youtube-icon"></i>
              <span>Watch Tutorial</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationPage',
  data() {
    return {
      documentations: [
        {
          title: "User Registration Guide",
          docLink: "/docs/user-registration-guide.docx",
          videoLink: "https://youtube.com/watch?v=user-registration-demo"
        },
        {
          title: "Content Management System Manual",
          docLink: "/docs/cms-manual.docx",
          videoLink: "https://youtube.com/watch?v=cms-walkthrough"
        },
        {
          title: "API Integration Documentation",
          docLink: "/docs/api-integration-guide.docx",
          videoLink: "https://youtube.com/watch?v=api-integration-demo"
        }
      ]
    }
  }
}
</script>

<style scoped>
.file-text-icon {
  width: 20px;
  height: 20px;
}

.youtube-icon {
  width: 20px;
  height: 20px;
}
</style>
