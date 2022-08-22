package rocks.zipcode.trial.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import rocks.zipcode.trial.domain.Product;

/**
 * Spring Data JPA repository for the Product entity.
 *
 * When extending this class, extend ProductRepositoryWithBagRelationships too.
 * For more information refer to https://github.com/jhipster/generator-jhipster/issues/17990.
 */
@Repository
public interface ProductRepository extends ProductRepositoryWithBagRelationships, JpaRepository<Product, Long> {
    default Optional<Product> findOneWithEagerRelationships(Long id) {
        return this.fetchBagRelationships(this.findOneWithToOneRelationships(id));
    }

    default List<Product> findAllWithEagerRelationships() {
        return this.fetchBagRelationships(this.findAllWithToOneRelationships());
    }

    default Page<Product> findAllWithEagerRelationships(Pageable pageable) {
        return this.fetchBagRelationships(this.findAllWithToOneRelationships(pageable));
    }

    @Query(
        value = "select distinct product from Product product left join fetch product.cart",
        countQuery = "select count(distinct product) from Product product"
    )
    Page<Product> findAllWithToOneRelationships(Pageable pageable);

    @Query("select distinct product from Product product left join fetch product.cart")
    List<Product> findAllWithToOneRelationships();

    @Query("select product from Product product left join fetch product.cart where product.id =:id")
    Optional<Product> findOneWithToOneRelationships(@Param("id") Long id);
}
