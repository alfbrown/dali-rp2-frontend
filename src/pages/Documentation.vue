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
            <!-- Download button with download attribute -->
            <a 
              :href="doc.docLink"
              download="test.docx"
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
          // Update docLink if needed, here using test.docx as the file to download.
          docLink: "/docs/test.docx",
          videoLink: "https://www.youtube.com/watch?v=pBy1zgt0XPc"
        },
        {
          title: "Content Management System Manual",
          docLink: "/docs/test.docx",
          videoLink: "https://www.youtube.com/watch?v=pBy1zgt0XPc"
        },
        {
          title: "API Integration Documentation",
          docLink: "/docs/test.docx",
          videoLink: "https://www.youtube.com/watch?v=pBy1zgt0XPc"
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
