export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      {
        name: 'postId',
        title: 'ID',
        type: 'string',
        readOnly: false,
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text'
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }
