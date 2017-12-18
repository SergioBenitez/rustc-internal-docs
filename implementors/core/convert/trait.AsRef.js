(function() {var implementors = {};
implementors["alloc"] = ["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/arc/struct.Arc.html\" title=\"struct alloc::arc::Arc\">Arc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, T&gt;","impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;str&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[u8]&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","impl&lt;T&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;","impl&lt;T&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[T]&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T&gt;",];
implementors["core"] = [];
implementors["owning_ref"] = ["impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;","impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRefMut.html\" title=\"struct owning_ref::OwningRefMut\">OwningRefMut</a>&lt;O, T&gt;",];
implementors["proc_macro"] = ["impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"enum\" href=\"syntax_pos/enum.FileName.html\" title=\"enum syntax_pos::FileName\">FileName</a>&gt; for <a class=\"struct\" href=\"proc_macro/struct.SourceFile.html\" title=\"struct proc_macro::SourceFile\">SourceFile</a>",];
implementors["rustc"] = ["impl&lt;'tcx&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"enum\" href=\"rustc/ty/enum.Predicate.html\" title=\"enum rustc::ty::Predicate\">Predicate</a>&lt;'tcx&gt;&gt; for <a class=\"enum\" href=\"rustc/ty/enum.Predicate.html\" title=\"enum rustc::ty::Predicate\">Predicate</a>&lt;'tcx&gt;",];
implementors["rustc_data_structures"] = ["impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"rustc_data_structures/owning_ref/struct.OwningRef.html\" title=\"struct rustc_data_structures::owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;","impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"rustc_data_structures/owning_ref/struct.OwningRefMut.html\" title=\"struct rustc_data_structures::owning_ref::OwningRefMut\">OwningRefMut</a>&lt;O, T&gt;",];
implementors["smallvec"] = ["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"std/primitive.slice.html\">[</a>A::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a><a class=\"primitive\" href=\"std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;",];
implementors["syntax_pos"] = ["impl&lt;U:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;U&gt; for <a class=\"struct\" href=\"syntax_pos/symbol/struct.InternedString.html\" title=\"struct syntax_pos::symbol::InternedString\">InternedString</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"std/primitive.str.html\">str</a>: <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;U&gt;,&nbsp;</span>",];
implementors["tempdir"] = ["impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"tempdir/struct.TempDir.html\" title=\"struct tempdir::TempDir\">TempDir</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
