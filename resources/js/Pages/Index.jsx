import { Link } from '@inertiajs/react'
import React from 'react'
import { router } from ''

export default function Index({ auth, posts }) {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link href={route('index')}>
                                    Home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href={route('create')}>
                                    Home
                                </Link>
                            </li>
                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {post.id}
                                        </th>
                                        <td class="px-6 py-4">
                                            {post.title}
                                        </td>
                                        <td class="px-6 py-4">
                                            {post.description}
                                        </td>

                                        <td className=' px-6 py-4'>
                                            <Link href={route('posts.edit', post.id)}>
                                                <i className='fa-solid fa-edit'></i>
                                            </Link>
                                            <td></td>
                                            <Link href={route('posts.destroy', post.id)} method='delete'>
                                                <i className='fa-solid fa-trash'></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
