(function() {var implementors = {};
implementors["alloc"] = ["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/arc/struct.Arc.html\" title=\"struct alloc::arc::Arc\">Arc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/arc/struct.Weak.html\" title=\"struct alloc::arc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/rc/struct.Weak.html\" title=\"struct alloc::rc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.LinkedList.html\" title=\"struct alloc::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.Iter.html\" title=\"struct alloc::linked_list::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.IterMut.html\" title=\"struct alloc::linked_list::IterMut\">IterMut</a>&lt;'a, T&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;","impl&lt;'a, 'b&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/string/struct.Splice.html\" title=\"struct alloc::string::Splice\">Splice</a>&lt;'a, 'b&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.Drain.html\" title=\"struct alloc::vec_deque::Drain\">Drain</a>&lt;'a, T&gt;",];
implementors["core"] = [];
implementors["owning_ref"] = ["impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"std/primitive.reference.html\">&amp;'a </a>T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningRefMut.html\" title=\"struct owning_ref::OwningRefMut\">OwningRefMut</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"std/primitive.reference.html\">&amp;'a mut </a>T: <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",];
implementors["rustc_trans"] = ["impl <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"rustc_trans/struct.ModuleTranslation.html\" title=\"struct rustc_trans::ModuleTranslation\">ModuleTranslation</a>",];
implementors["syntax_pos"] = ["impl !<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"syntax_pos/symbol/struct.Symbol.html\" title=\"struct syntax_pos::symbol::Symbol\">Symbol</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
