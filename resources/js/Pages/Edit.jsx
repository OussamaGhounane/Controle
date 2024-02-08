import React from 'react'

export default function Edit({ auth, posts }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        title: posts.title,
        description: posts.description,
    })

    const submit = (e) => {
        e.preventDefault();
        put(route('posts.update', { post: posts.id }));
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" name='title' class="form-control" id="" aria-describedby="" />
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" name='description' class="form-control" id="" aria-describedby="" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
