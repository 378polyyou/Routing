<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia::render('Products/Index',['products'=>$this->products]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = collect($this->products)->firstWhere('id', $id);
    
    // ถ้าไม่พบสินค้า ให้หยุดการทำงานและแสดง error 404
    if (!$product) {
        abort(404, 'Product not found');
    }

    // ส่งข้อมูลสินค้าไปที่ view ของ Inertia
    return Inertia::render('Products/Show', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
    private $products = [
        ['id' => 1, 'name' => 'Toy Robot', 'description' => 'Interactive robot with voice commands and movements', 'price' => 30, 
         'img' => ['https://down-th.img.susercontent.com/file/th-11134207-7r98v-lqo96sxo7raca4.webp', 'https://down-th.img.susercontent.com/file/th-11134207-7r98w-lqo96sxo95usc2.webp','https://down-th.img.susercontent.com/file/th-11134207-7r98w-lqo96sxo95usc2.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/th-11134207-7r98u-lqo96sxobyzo64'],
         
        ['id' => 2, 'name' => 'Building Blocks', 'description' => 'Set of colorful building blocks for creative play', 'price' => 20, 
         'img' => ['https://down-th.img.susercontent.com/file/th-11134207-7rasj-m22g5279pyvda4.webp', 'https://down-th.img.susercontent.com/file/th-11134207-7rasd-m22g5279okief5.webp','https://down-th.img.susercontent.com/file/th-11134207-7rash-m22g6982q2mh01.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/th-11134207-7rasd-m22g6982rh6x19@resize_w450_nl.webp'],
         
        ['id' => 3, 'name' => 'Dollhouse', 'description' => 'Detailed dollhouse with furniture and accessories', 'price' => 70, 
         'img' => ['https://down-th.img.susercontent.com/file/cn-11134207-7ras8-m1cgvcod8dc79b.webp', 'https://down-th.img.susercontent.com/file/cn-11134207-7ras8-m1cgw3xhb7pf74.webp','https://down-th.img.susercontent.com/file/cn-11134207-7ras8-m1cgvcodb64jb2.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/cn-11134207-7ras8-m1cgvcod8czn11.webp'],
         
        ['id' => 4, 'name' => 'Action Figure', 'description' => 'Poseable superhero action figure with accessories', 'price' => 25, 
         'img' => ['https://down-th.img.susercontent.com/file/sg-11134201-7ren4-m1s71vl0br7a85.webp', 'https://down-th.img.susercontent.com/file/sg-11134201-7reqa-m1s71y04v2gt6d.webp','https://down-th.img.susercontent.com/file/sg-11134201-7req3-m1s71z0hb2h00a.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/sg-11134201-7reoq-m1s71uv7di931e.webp'],
         
        ['id' => 5, 'name' => 'Plush Teddy Bear', 'description' => 'Soft and cuddly teddy bear, perfect for hugs', 'price' => 15, 
         'img' => ['https://down-th.img.susercontent.com/file/sg-11134201-7rdy9-lxcfu4swfq1261.webp', 'https://down-th.img.susercontent.com/file/sg-11134201-7rdvm-lxcfthxdwty76b.webp','https://down-th.img.susercontent.com/file/sg-11134201-7rdwc-lxcg08s0kgwa36.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/sg-11134201-7rdwe-lzyl54333sfr6b.webp'],
         
        ['id' => 6, 'name' => 'Remote Control Car', 'description' => 'Fast remote control car with durable design', 'price' => 50, 
         'img' => ['https://down-th.img.susercontent.com/file/th-11134207-7qul8-lh7e19e21cs4c0.webp', 'https://down-th.img.susercontent.com/file/th-11134207-7qul0-lh7e19e245x03a.webp','https://down-th.img.susercontent.com/file/th-11134207-7qul5-lh7e19e25khg78.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/th-11134207-7qul4-lh7e19e22rcka3.webp'],
         
        ['id' => 7, 'name' => 'Board Game', 'description' => 'Fun family board game for 2-4 players', 'price' => 40, 
         'img' => ['https://down-th.img.susercontent.com/file/th-11134207-23010-daw85wsa5emv97.webp', 'https://down-th.img.susercontent.com/file/th-11134207-23010-nbplpnsa5emv56.webp','https://down-th.img.susercontent.com/file/th-11134207-23010-dujbnusa5emv06.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/th-11134207-23010-j9jgm3ra5emv76.webp'],
         
        ['id' => 8, 'name' => 'Puzzle Set', 'description' => 'Challenging puzzle set with different themes and difficulty levels', 'price' => 12, 
         'img' => ['https://down-th.img.susercontent.com/file/30a3ead1855bb6a6d692bf26415b93ed.webp', 'https://down-th.img.susercontent.com/file/c2e09e2eb7c65d75870cbde986330651.webp','https://down-th.img.susercontent.com/file/bd951700377a782dc1c2eb79b83077c4.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/9f5f6f2219625c7a73a3171fa45cf040.webp'],
         
        ['id' => 9, 'name' => 'Toy Train Set', 'description' => 'Complete train set with tracks and accessories', 'price' => 60, 
         'img' => ['https://down-th.img.susercontent.com/file/df5da77eb275cf69b287f81e97c34019.webp', 'https://down-th.img.susercontent.com/file/0d1984bb0e71f1b163b006c73719dbfd.webp','https://down-th.img.susercontent.com/file/2a8d6a0e35eb4f87af2bcf24104c7aba.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/c9b3ade558445f04f22bfa8dbc04e50c.webp'],
         
        ['id' => 10, 'name' => 'Educational Toy', 'description' => 'Interactive toy designed to teach letters, numbers, and shapes', 'price' => 18, 
         'img' => ['https://down-th.img.susercontent.com/file/d5dce184968054d47846b20d485ee18c.webp', 'https://down-th.img.susercontent.com/file/3e5535cc9a0d51836960a17d0c7db715.webp','https://down-th.img.susercontent.com/file/3155df3bce3ffaae2867b1dd05dd424f.webp'], 
         'imghead' => 'https://down-th.img.susercontent.com/file/th-11134207-7r98y-lm34fhgfoln2d3.webp'],
    ];
    
    
}
