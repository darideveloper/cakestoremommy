import fs from 'fs'
import path from 'path'

export const basePath = path.join('public', "images", "gallery")
export const galleryDirectory = path.join(process.cwd(), basePath)


export function getImages() {
  // Get images and sort by date

  const allCategoryName = "all"

  const imagesData = [{"name": allCategoryName, "images": []}]
  const categories = [allCategoryName]

  // Get folders
  const folders = fs.readdirSync(galleryDirectory)
  for (const folder of folders) {
    // Skip toor images
    if (folder.includes(".")) {
      continue
    }

    // Add folder to data
    if (!imagesData[folder]) {
      imagesData.push({"name": folder, "images": []})
      categories.push(folder)
    }

    const currentCategory = imagesData.find (category => category.name === folder)

    // Get images
    const folderPath = path.join(galleryDirectory, folder)
    const images = fs.readdirSync(folderPath)
    for (const image of images) {

      // Add image to category
      currentCategory.images.push(image)

      // Add image to "all" category
      imagesData[0].images.push(`${folder}/${image}`)
    }
  }

  return imagesData

  // let allPostsData = fileNames.map((fileName) => {

  //   // Skip no md files
  //   if (!fileName.endsWith(".md")) {
  //     return null
  //   } 

  //   // Remove ".md" from file name to get id
  //   const id = fileName.replace(/\.md$/, '')

  //   // Read markdown file as string
  //   const fullPath = path.join(postsDirectory, fileName)
  //   const fileContents = fs.readFileSync(fullPath, 'utf8')

  //   // Use gray-matter to parse the post metadata section
  //   const matterResult = matter(fileContents)

  //   // Combine the data with the id
  //   return {
  //     id,
  //     ...matterResult.data,
  //   }
  // })

  // // Filter null values
  // allPostsData = allPostsData.filter(post => post !== null)

  // // Sort posts by date
  // allPostsData = allPostsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1
  //   } else {
  //     return -1
  //   }
  // })
  
  // // Sort posts by date
  // return allPostsData

}