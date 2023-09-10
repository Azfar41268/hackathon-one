export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "Product Title",
            type: "string",
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
        },
        {
            name:"type",
            title: "Product Type",
            type: "string",
        },
        {
            name: "url",
            title: "Product Url",
            type: "string",
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: "category",
                }
            ]
        },
    ]
}