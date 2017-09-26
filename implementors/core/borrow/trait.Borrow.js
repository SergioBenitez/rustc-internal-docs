(function() {var implementors = {};
implementors["core"] = [];
implementors["owning_ref"] = ["impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;T&gt; for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt;",];
implementors["smallvec"] = ["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"std/primitive.slice.html\">[</a>A::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a><a class=\"primitive\" href=\"std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;",];
implementors["tendril"] = ["impl&lt;F, A&gt; <a class=\"trait\" href=\"core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"tendril/fmt/trait.SliceFormat.html\" title=\"trait tendril::fmt::SliceFormat\">SliceFormat</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a>,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
