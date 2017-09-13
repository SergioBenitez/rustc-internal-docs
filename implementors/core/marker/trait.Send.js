(function() {var implementors = {};
implementors["alloc"] = ["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/arc/struct.Arc.html\" title=\"struct alloc::arc::Arc\">Arc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/arc/struct.Weak.html\" title=\"struct alloc::arc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T&gt;","impl&lt;T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/rc/struct.Weak.html\" title=\"struct alloc::rc::Weak\">Weak</a>&lt;T&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.LinkedList.html\" title=\"struct alloc::linked_list::LinkedList\">LinkedList</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.Iter.html\" title=\"struct alloc::linked_list::Iter\">Iter</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/linked_list/struct.IterMut.html\" title=\"struct alloc::linked_list::IterMut\">IterMut</a>&lt;'a, T&gt;","impl&lt;'a&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;","impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T&gt;","impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"alloc/vec_deque/struct.Drain.html\" title=\"struct alloc::vec_deque::Drain\">Drain</a>&lt;'a, T&gt;",];
implementors["arena"] = ["impl&lt;T:&nbsp;<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"arena/struct.TypedArena.html\" title=\"struct arena::TypedArena\">TypedArena</a>&lt;T&gt;",];
implementors["core"] = [];
implementors["owning_ref"] = ["impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningRef.html\" title=\"struct owning_ref::OwningRef\">OwningRef</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"std/primitive.reference.html\">&amp;'a </a>T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>","impl&lt;O, T:&nbsp;?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"owning_ref/struct.OwningRefMut.html\" title=\"struct owning_ref::OwningRefMut\">OwningRefMut</a>&lt;O, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;O: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"std/primitive.reference.html\">&amp;'a mut </a>T: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];
implementors["rustc_trans"] = ["impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rustc_trans/back/write/struct.ModuleConfig.html\" title=\"struct rustc_trans::back::write::ModuleConfig\">ModuleConfig</a>","impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rustc_trans/struct.ModuleTranslation.html\" title=\"struct rustc_trans::ModuleTranslation\">ModuleTranslation</a>",];
implementors["smallvec"] = ["impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>: <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",];
implementors["syntax_pos"] = ["impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"syntax_pos/symbol/struct.Symbol.html\" title=\"struct syntax_pos::symbol::Symbol\">Symbol</a>","impl !<a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"syntax_pos/symbol/struct.InternedString.html\" title=\"struct syntax_pos::symbol::InternedString\">InternedString</a>",];
implementors["tendril"] = ["impl&lt;F, A&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tendril/struct.Tendril.html\" title=\"struct tendril::Tendril\">Tendril</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"tendril/fmt/trait.Format.html\" title=\"trait tendril::fmt::Format\">Format</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tendril/trait.Atomicity.html\" title=\"trait tendril::Atomicity\">Atomicity</a> + <a class=\"trait\" href=\"core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","impl&lt;F&gt; <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tendril/struct.SendTendril.html\" title=\"struct tendril::SendTendril\">SendTendril</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"tendril/fmt/trait.Format.html\" title=\"trait tendril::fmt::Format\">Format</a>,&nbsp;</span>",];
implementors["test"] = ["impl <a class=\"trait\" href=\"core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"test/enum.TestResult.html\" title=\"enum test::TestResult\">TestResult</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
