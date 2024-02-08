import React from 'react'

export default function Create({ auth, posts }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: ""
    })

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.create'));
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name='title' class="form-control" id="" aria-describedby="" />
                    <span>{errors.name}</span>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name='description' class="form-control" id="" aria-describedby="" />
                    {errors.name}
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}